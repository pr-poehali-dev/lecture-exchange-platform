import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import AuthDialog from "@/components/AuthDialog";
import UploadLectureDialog from "@/components/UploadLectureDialog";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Icon name="GraduationCap" size={28} className="text-primary" />
            <span className="text-xl font-bold">ЛекцияHub</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Лекции
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Категории
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Преподаватели
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              О нас
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <UploadLectureDialog>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Icon name="Plus" size={16} className="mr-2" />
              Загрузить
            </Button>
          </UploadLectureDialog>

          <AuthDialog>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Войти
            </Button>
          </AuthDialog>

          <AuthDialog>
            <Button size="sm">Регистрация</Button>
          </AuthDialog>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
