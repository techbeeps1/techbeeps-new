<?php
/**
 * TechBeeps Website - Contact Form REST API & Email Dispatcher
 * 
 * Paste this code into your active WordPress theme's `functions.php` file
 * (or place it in a custom plugin inside wp-content/plugins/techbeeps-contact-api.php).
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
    $first_name = sanitize_text_field($request->get_param('firstName'));
    $last_name  = sanitize_text_field($request->get_param('lastName'));
    $email      = sanitize_email($request->get_param('email'));
    $company    = sanitize_text_field($request->get_param('company'));
    $phone      = sanitize_text_field($request->get_param('phone'));
    $message    = sanitize_textarea_field($request->get_param('message'));

    // 2. Validate Required Fields
    if (empty($first_name) || empty($last_name)) {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Please provide your full name (First and Last Name).'
        ), 400);
    }

    if (empty($email) || !is_email($email)) {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Please provide a valid email address.'
        ), 400);
    }

    if (empty($message)) {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Please enter your message.'
        ), 400);
    }

    $full_name = trim($first_name . ' ' . $last_name);
    $recipient = 'asif@techbeeps.com';
    $subject   = 'New Contact Inquiry: ' . $full_name . (!empty($company) ? ' (' . $company . ')' : '');

    // 3. Build HTML Email Body
    $html_body = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #0c071e; color: #ffffff; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #120D25; border: 1px solid rgba(133,76,255,0.3); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
            .header { background: linear-gradient(135deg, #291D58 0%, #120D25 100%); padding: 30px 24px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); }
            .header h1 { margin: 0; font-size: 24px; color: #9795FF; font-weight: 700; }
            .header p { margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,0.6); }
            .content { padding: 28px 24px; }
            .table-data { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .table-data td { padding: 12px 14px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px; }
            .table-data td.label { width: 30%; color: #9795FF; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
            .table-data td.value { color: #ffffff; font-weight: 500; }
            .message-box { background: rgba(255,255,255,0.04); border: 1px solid rgba(133,76,255,0.2); border-radius: 10px; padding: 18px; margin-top: 10px; }
            .message-title { font-size: 12px; font-weight: 700; color: #9795FF; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px; }
            .message-text { color: #e2e8f0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0; }
            .footer { padding: 20px 24px; text-align: center; font-size: 12px; color: rgba(255,255,255,0.4); border-top: 1px solid rgba(255,255,255,0.06); }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>TechBeeps Contact Form</h1>
                <p>New message submitted from techbeeps.com</p>
            </div>
            <div class="content">
                <table class="table-data">
                    <tr>
                        <td class="label">Full Name</td>
                        <td class="value">' . esc_html($full_name) . '</td>
                    </tr>
                    <tr>
                        <td class="label">Email Address</td>
                        <td class="value"><a href="mailto:' . esc_attr($email) . '" style="color:#9795FF; text-decoration:none;">' . esc_html($email) . '</a></td>
                    </tr>
                    ' . (!empty($phone) ? '
                    <tr>
                        <td class="label">Phone Number</td>
                        <td class="value"><a href="tel:' . esc_attr($phone) . '" style="color:#9795FF; text-decoration:none;">' . esc_html($phone) . '</a></td>
                    </tr>' : '') . '
                    ' . (!empty($company) ? '
                    <tr>
                        <td class="label">Company</td>
                        <td class="value">' . esc_html($company) . '</td>
                    </tr>' : '') . '
                </table>

                <div class="message-box">
                    <div class="message-title">Message:</div>
                    <p class="message-text">' . nl2br(esc_html($message)) . '</p>
                </div>
            </div>
            <div class="footer">
                &copy; ' . date('Y') . ' TechBeeps. All rights reserved. &bull; <a href="https://techbeeps.com" style="color:rgba(255,255,255,0.6); text-decoration:none;">techbeeps.com</a>
            </div>
        </div>
    </body>
    </html>
    ';

    // 4. Email Headers
    $headers = array(
        'Content-Type: text/html; charset=UTF-8',
        'Reply-To: ' . $full_name . ' <' . $email . '>',
        'From: TechBeeps Website <no-reply@techbeeps.co.in>',
    );

    // 5. Send Email
    $mail_sent = wp_mail($recipient, $subject, $html_body, $headers);

    if ($mail_sent) {
        return new WP_REST_Response(array(
            'success' => true,
            'message' => 'Thank you! Your message has been sent successfully.',
        ), 200);
    } else {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Failed to send email. Please check server SMTP configuration.',
        ), 500);
    }
}
