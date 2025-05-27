import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Делитесь знаниями, учитесь вместе
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Платформа для обмена лекциями, где каждый может поделиться своими
            знаниями и найти интересные материалы от экспертов
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-12">
            <div className="relative flex-1">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Поиск лекций, авторов, тем..."
                className="pl-10 h-12"
              />
            </div>
            <Button size="lg" className="whitespace-nowrap">
              <Icon name="Search" size={20} />
              Найти
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="text-muted-foreground">Популярные темы:</span>
            {["Программирование", "Дизайн", "Маркетинг", "Наука", "Языки"].map(
              (tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 bg-secondary/20 hover:bg-secondary/30 rounded-full transition-colors"
                >
                  {tag}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
