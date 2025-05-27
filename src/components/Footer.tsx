import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t mt-16">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={24} className="text-primary" />
              <span className="text-lg font-bold">ЛекцияHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Платформа для обмена знаниями и образовательными материалами
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Платформа</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Лекции
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Преподаватели
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Категории
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Популярное
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Сообщество</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Форум
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  События
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Партнеры
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Справка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Обратная связь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 ЛекцияHub. Все права защищены.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="Twitter" size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="Github" size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
