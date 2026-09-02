import React from "react";
import {
  FaCommentDots,
  FaRobot,
  FaArrowTrendUp,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
  FaShopify,
  FaGlobe,
  FaPlug,
  FaBrain,
  FaGears,
  FaCloud,
  FaCode,
  FaTerminal,
  FaServer,
  FaChartLine,
  FaShieldHalved,
  FaDatabase,
  FaMicrochip,
  FaWordpress,
  FaMagento,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  TbDeviceMobileCode,
  TbPalette,
  TbDeviceMobileUp,
  TbDeviceMobileCheck,
  TbDeviceMobileMessage,
  TbDeviceMobileBolt,
  TbWorld,
  TbPlugConnected,
  TbBrain,
  TbSettingsAutomation,
  TbCloudCode,
  TbApi,
  TbDatabase,
  TbApps,
  TbArrowsExchange,
  TbTools,
  TbHeadset,
  TbBuildingStore,
  TbShoppingCart,
  TbPuzzle,
  TbDeviceDesktopCode,
  TbGauge,
  TbEyeCheck,
  TbAccessible,
  TbShieldCheck,
  TbBrandWhatsapp,
} from "react-icons/tb";
import {
  SiShopify,
  SiNextdotjs,
  SiFlutter,
  SiKotlin,
  SiDjango,
  SiFastapi,
  SiWoocommerce,
  SiWoo,
  SiAngular,
  SiPrestashop,
} from "react-icons/si";
import { BsGear, BsCodeSlash, BsTerminal, BsCloud, BsCpu } from "react-icons/bs";
import { IconType } from "react-icons";

interface ServiceIconProps {
  iconName?: string;
  imageSrc?: string;
  title: string;
}

const iconRegistry: Record<string, IconType> = {
  FaCommentDots,
  FaRobot,
  FaArrowTrendUp,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
  FaShopify,
  FaGlobe,
  FaPlug,
  FaBrain,
  FaGears,
  FaCloud,
  FaCode,
  FaTerminal,
  FaServer,
  FaChartLine,
  FaShieldHalved,
  FaDatabase,
  FaMicrochip,
  FaWordpress,
  FaMagento,
  FaWhatsapp,
  TbDeviceMobileCode,
  TbPalette,
  TbDeviceMobileUp,
  TbDeviceMobileCheck,
  TbDeviceMobileMessage,
  TbDeviceMobileBolt,
  TbWorld,
  TbPlugConnected,
  TbBrain,
  TbSettingsAutomation,
  TbCloudCode,
  TbApi,
  TbDatabase,
  TbApps,
  TbArrowsExchange,
  TbTools,
  TbHeadset,
  TbBuildingStore,
  TbShoppingCart,
  TbPuzzle,
  TbDeviceDesktopCode,
  TbGauge,
  TbEyeCheck,
  TbAccessible,
  TbShieldCheck,
  TbBrandWhatsapp,
  SiShopify,
  SiNextdotjs,
  SiFlutter,
  SiKotlin,
  SiDjango,
  SiFastapi,
  SiWoocommerce,
  SiWoo,
  SiAngular,
  SiPrestashop,
  BsGear,
  BsCodeSlash,
  BsTerminal,
  BsCloud,
  BsCpu,
};

export default function ServiceIcon({ iconName, imageSrc, title }: ServiceIconProps) {
  if (imageSrc) {
    return (
      <img
        src={imageSrc}
        width={32}
        height={32}
        alt={`${title} icon`}
        className="w-[24px] lg:w-[32px] h-auto relative z-10 transition-transform duration-500 group-hover:scale-110"
      />
    );
  }

  const IconComponent = (iconName && iconRegistry[iconName]) || BsCodeSlash;

  return (
    <IconComponent className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] text-white/90 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#9795FF]" />
  );
}
