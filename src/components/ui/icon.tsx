import React from "react";
import {
  GraduationCap,
  Search,
  Menu,
  Play,
  FileText,
  Presentation,
  File,
  Star,
  Eye,
  Twitter,
  Github,
  Mail,
  Filter,
  Grid,
  List,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const iconMap = {
  GraduationCap,
  Search,
  Menu,
  Play,
  FileText,
  Presentation,
  File,
  Star,
  Eye,
  Twitter,
  Github,
  Mail,
  Filter,
  Grid,
  List,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "File",
}) => {
  const IconComponent =
    iconMap[name as keyof typeof iconMap] ||
    iconMap[fallback as keyof typeof iconMap];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
