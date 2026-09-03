<?php
/**
 * TechBeeps Website - Contact Form & Hire Developer REST API & Email Dispatcher
 * 
 * Instructions:
 * 1. Copy and paste this code into your active WordPress theme's `functions.php` file
 *    (or create a custom plugin inside wp-content/plugins/techbeeps-contact-api/techbeeps-contact-api.php).
 * 
 * Endpoint: POST /wp-json/techbeeps/v1/contact
 * Destination Email: asif@techbeeps.com
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

add_action('rest_api_init', function () {
    register_rest_route('techbeeps/v1', '/contact', array(
        'methods'             => 'POST',
        'callback'            => 'techbeeps_handle_contact_form',
        'permission_callback' => '__return_true', // Public endpoint
    ));
});

function techbeeps_handle_contact_form(WP_REST_Request $request) {
    // 1. Extract & Sanitize Request Parameters
    $form_type        = sanitize_text_field($request->get_param('formType'));
    $first_name       = sanitize_text_field($request->get_param('firstName'));
    $last_name        = sanitize_text_field($request->get_param('lastName'));
    $email            = sanitize_email($request->get_param('email'));
    $company          = sanitize_text_field($request->get_param('company'));
    $phone            = sanitize_text_field($request->get_param('phone'));
    $message          = sanitize_textarea_field($request->get_param('message'));

    // Hire Developer specific fields
    $developer_type   = sanitize_text_field($request->get_param('developerType'));
    $engagement_model = sanitize_text_field($request->get_param('engagementModel'));
    $contact_method   = sanitize_text_field($request->get_param('contactMethod'));
    $project_link     = esc_url_raw($request->get_param('projectLink'));

    // Detect if this is a Hire Developer submission
    $is_hire_dev = ($form_type === 'hire-developer') 
        || !empty($developer_type) 
        || (strpos($message, '[Hire Developer Inquiry]') !== false)
        || (strpos($company, 'Hiring:') !== false);

    // 2. Validate Required Fields
    if (empty($first_name)) {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Please enter your First Name.'
        ), 400);
    }

    if (empty($email) || !is_email($email)) {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Please provide a valid email address.'
        ), 400);
    }

    if (empty($phone) && ($is_hire_dev && $contact_method === 'Email' ? false : true)) {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Please enter your Contact/Mobile Number.'
        ), 400);
    }

    if (empty($message)) {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Please enter your message/requirements.'
        ), 400);
    }

    // 3. Clean and Normalize Phone Number (prevent duplicate country codes like "+91 +91...")
    $clean_phone = trim($phone);
    if (!empty($clean_phone) && $clean_phone !== 'N/A') {
        // Fix "+91 +91..." -> "+91 ..."
        $clean_phone = preg_replace('/^(\+\d{1,4})\s*\1\s*/', '$1 ', $clean_phone);
        // Fix "+91 919024..." -> "+91 9024..."
        $clean_phone = preg_replace('/^(\+(\d{1,4}))\s*\2(\d{6,})/', '$1 $3', $clean_phone);
    }

    // 4. Parse requirements message for Hire Developer if formatted previously as raw block
    $clean_message = $message;
    if ($is_hire_dev) {
        if (preg_match('/Project Requirements:\s*([\s\S]*)$/i', $message, $matches)) {
            $clean_message = trim($matches[1]);
        } elseif (preg_match('/\[Hire Developer Inquiry\]\s*([\s\S]*)$/i', $message, $matches)) {
            $clean_message = trim($matches[1]);
        }
        // Extract fields from legacy message format if not passed in dedicated parameters
        if (empty($developer_type) && preg_match('/Developer Role:\s*(.+)$/mi', $message, $m_role)) {
            $developer_type = trim($m_role[1]);
        }
        if (empty($engagement_model) && preg_match('/Engagement Model:\s*(.+)$/mi', $message, $m_eng)) {
            $engagement_model = trim($m_eng[1]);
        }
        if (empty($contact_method) && preg_match('/Preferred Contact Method:\s*(.+)$/mi', $message, $m_cm)) {
            $contact_method = trim($m_cm[1]);
        }
        if (empty($project_link) && preg_match('/Project Link:\s*(.+)$/mi', $message, $m_link)) {
            $extracted_link = trim($m_link[1]);
            if ($extracted_link !== 'None provided' && filter_var($extracted_link, FILTER_VALIDATE_URL)) {
                $project_link = $extracted_link;
            }
        }
    }

    $full_name = trim($first_name . (!empty($last_name) ? ' ' . $last_name : ''));
    $recipient = 'asif@techbeeps.com';

    // WhatsApp clean numbers
    $wa_digits = preg_replace('/[^\d]/', '', $clean_phone);

    // 5. Build Subject Line
    if ($is_hire_dev) {
        $role_text = !empty($developer_type) ? $developer_type : 'Developer';
        $subject = '🎯 Hire Developer Inquiry: ' . $role_text . ' - ' . $full_name;
    } else {
        $subject = '📩 New Contact Inquiry: ' . $full_name . (!empty($company) ? ' (' . $company . ')' : '');
    }

    // 6. Build Premium Responsive HTML Email Template
    $header_title = $is_hire_dev ? 'Hire Developer Request' : 'TechBeeps Contact Form';
    $header_badge = $is_hire_dev ? 'DEDICATED TALENT INQUIRY' : 'NEW CONTACT MESSAGE';
    $badge_bg     = $is_hire_dev ? 'linear-gradient(90deg, #854CFF 0%, #25D366 100%)' : 'linear-gradient(90deg, #854CFF 0%, #9795FF 100%)';

    $html_body = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>' . esc_html($subject) . '</title>
        <style>
            body { margin: 0; padding: 0; background-color: #080318; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
            table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
            td { vertical-align: top; }
            img { border: 0; outline: none; text-decoration: none; }
            a { color: #9795FF; text-decoration: none; }
            .wrapper { width: 100%; table-layout: fixed; background-color: #080318; padding: 30px 10px; }
            .container { max-width: 620px; margin: 0 auto; background-color: #120D25; border: 1px solid rgba(133,76,255,0.35); border-radius: 18px; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.6); }
            .header-banner { background: linear-gradient(135deg, #1b0f38 0%, #0d0620 100%); padding: 32px 28px 24px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.08); position: relative; }
            .badge { display: inline-block; padding: 5px 14px; border-radius: 50px; background: ' . $badge_bg . '; color: #ffffff; font-size: 10.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px; }
            .header-title { margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px; }
            .header-subtitle { margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,0.6); }
            .content { padding: 28px 26px; }
            .section-heading { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #9795FF; margin-bottom: 12px; padding-bottom: 6px; border-bottom: 1px solid rgba(133,76,255,0.2); }
            .data-table { width: 100%; margin-bottom: 22px; }
            .data-table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.05); }
            .data-table td.field-label { width: 34%; color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.4px; }
            .data-table td.field-value { color: #ffffff; font-weight: 500; }
            .highlight-val { color: #BE9FFF; font-weight: 600; }
            .message-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(133,76,255,0.25); border-radius: 12px; padding: 18px; margin-top: 6px; margin-bottom: 24px; }
            .message-text { margin: 0; color: #e2e8f0; font-size: 14px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; }
            .actions-row { text-align: center; padding: 10px 0 16px; }
            .btn { display: inline-block; padding: 10px 20px; border-radius: 50px; font-size: 13px; font-weight: 600; text-decoration: none; margin: 4px; }
            .btn-primary { background-color: #854CFF; color: #ffffff !important; }
            .btn-wa { background-color: #25D366; color: #ffffff !important; }
            .footer { padding: 22px 24px; background-color: #0b061d; text-align: center; font-size: 12px; color: rgba(255,255,255,0.4); border-top: 1px solid rgba(255,255,255,0.06); }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="container">
                
                <!-- Header Banner -->
                <div class="header-banner">
                    <span class="badge">' . esc_html($header_badge) . '</span>
                    <h1 class="header-title">' . esc_html($header_title) . '</h1>
                    <p class="header-subtitle">Submitted from <a href="https://techbeeps.com" style="color:#BE9FFF;">techbeeps.com</a> on ' . date('d M, Y - h:i A') . ' (IST)</p>
                </div>

                <div class="content">
                    
                    <!-- Section 1: Client Contact Information -->
                    <div class="section-heading">👤 Client Contact Details</div>
                    <table class="data-table">
                        <tr>
                            <td class="field-label">Full Name</td>
                            <td class="field-value">' . esc_html($full_name) . '</td>
                        </tr>
                        <tr>
                            <td class="field-label">Email Address</td>
                            <td class="field-value"><a href="mailto:' . esc_attr($email) . '">' . esc_html($email) . '</a></td>
                        </tr>
                        <tr>
                            <td class="field-label">Phone / Mobile</td>
                            <td class="field-value">' . (!empty($clean_phone) ? '<a href="tel:' . esc_attr($clean_phone) . '">' . esc_html($clean_phone) . '</a>' : '<span style="color:rgba(255,255,255,0.4);">Not provided</span>') . '</td>
                        </tr>';

    if ($is_hire_dev && !empty($contact_method)) {
        $html_body .= '
                        <tr>
                            <td class="field-label">Preferred Contact</td>
                            <td class="field-value"><span class="highlight-val">' . esc_html($contact_method) . '</span></td>
                        </tr>';
    }

    if (!$is_hire_dev && !empty($company)) {
        $html_body .= '
                        <tr>
                            <td class="field-label">Company / Org</td>
                            <td class="field-value">' . esc_html($company) . '</td>
                        </tr>';
    }

    $html_body .= '
                    </table>';

    // Section 2: Hiring Specifications (Only for Hire Developer)
    if ($is_hire_dev) {
        $html_body .= '
                    <div class="section-heading">💼 Hiring Requirements</div>
                    <table class="data-table">
                        <tr>
                            <td class="field-label">Developer Role</td>
                            <td class="field-value"><strong style="color:#BE9FFF; font-size:15px;">' . esc_html(!empty($developer_type) ? $developer_type : 'AI & Machine Learning Developer') . '</strong></td>
                        </tr>
                        <tr>
                            <td class="field-label">Engagement Model</td>
                            <td class="field-value">' . esc_html(!empty($engagement_model) ? $engagement_model : 'Dedicated Full-Time (160 hrs/mo)') . '</td>
                        </tr>
                        <tr>
                            <td class="field-label">Project / Spec Link</td>
                            <td class="field-value">' . (!empty($project_link) ? '<a href="' . esc_url($project_link) . '" target="_blank" style="color:#25D366; word-break:break-all;">' . esc_html($project_link) . ' ↗</a>' : '<span style="color:rgba(255,255,255,0.4);">None provided</span>') . '</td>
                        </tr>
                    </table>';
    }

    // Section 3: Project Requirements / Message
    $msg_heading = $is_hire_dev ? '📝 Project Requirements & Description' : '💬 Message Content';
    $html_body .= '
                    <div class="section-heading">' . esc_html($msg_heading) . '</div>
                    <div class="message-card">
                        <p class="message-text">' . nl2br(esc_html($clean_message)) . '</p>
                    </div>

                    <!-- Quick Action Buttons Box -->
                    <div style="background: rgba(133, 76, 255, 0.08); border: 1px solid rgba(133, 76, 255, 0.28); border-radius: 14px; padding: 18px 16px; margin: 26px 0 10px; text-align: center;">
                        <div style="font-size: 11px; font-weight: 700; color: #BE9FFF; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 14px;">
                            ⚡ Instant One-Click Response
                        </div>
                        <div style="text-align: center;">
                            <!-- Reply via Email Button -->
                            <a href="mailto:' . esc_attr($email) . '?subject=Re:%20TechBeeps%20Inquiry" style="display: inline-block; vertical-align: middle; margin: 4px 6px; padding: 11px 24px; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; font-size: 13.5px; font-weight: 700; color: #ffffff !important; text-decoration: none !important; background: linear-gradient(135deg, #854CFF 0%, #632cd6 100%); background-color: #854CFF; border: 1px solid #a37aff; border-radius: 50px; box-shadow: 0 4px 15px rgba(133,76,255,0.45); text-align: center; letter-spacing: 0.3px; line-height: 1;">
                                <span style="font-size: 14px; margin-right: 6px;">✉</span>Reply via Email
                            </a>';
    
    if (!empty($wa_digits)) {
        $html_body .= '
                            <!-- Chat on WhatsApp Button -->
                            <a href="https://wa.me/' . esc_attr($wa_digits) . '" target="_blank" style="display: inline-block; vertical-align: middle; margin: 4px 6px; padding: 11px 24px; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; font-size: 13.5px; font-weight: 700; color: #ffffff !important; text-decoration: none !important; background: linear-gradient(135deg, #25D366 0%, #1da851 100%); background-color: #25D366; border: 1px solid #4be886; border-radius: 50px; box-shadow: 0 4px 15px rgba(37,211,102,0.4); text-align: center; letter-spacing: 0.3px; line-height: 1;">
                                <span style="font-size: 14px; margin-right: 6px;">💬</span>Chat on WhatsApp
                            </a>';
    }

    $html_body .= '
                        </div>
                    </div>

                </div>

                <!-- Footer -->
                <div class="footer">
                    &copy; ' . date('Y') . ' TechBeeps Services. All rights reserved.<br>
                    <a href="https://techbeeps.com">techbeeps.com</a> &bull; Premier Software & AI Engineering
                </div>

            </div>
        </div>
    </body>
    </html>
    ';

    // 7. Email Headers
    $headers = array(
        'Content-Type: text/html; charset=UTF-8',
        'Reply-To: ' . $full_name . ' <' . $email . '>',
        'From: TechBeeps Website <no-reply@techbeeps.co.in>',
    );

    // 8. Send Email via WordPress wp_mail
    $mail_sent = wp_mail($recipient, $subject, $html_body, $headers);

    if ($mail_sent) {
        return new WP_REST_Response(array(
            'success' => true,
            'message' => 'Thank you! Your request has been sent successfully. Our team will contact you within 24 hours.',
        ), 200);
    } else {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Failed to send email. Please check server SMTP configuration.',
        ), 500);
    }
}
