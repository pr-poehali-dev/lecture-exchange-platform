import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface UploadLectureDialogProps {
  children: React.ReactNode;
}

const UploadLectureDialog = ({ children }: UploadLectureDialogProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    category: "",
    file: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Интеграция с бэкендом
    console.log("Лекция загружена:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      file,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Загрузить лекцию</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Название лекции</Label>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Введите название лекции"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Input
              id="description"
              name="description"
              type="text"
              placeholder="Краткое описание лекции"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Категория</Label>
            <Input
              id="category"
              name="category"
              type="text"
              placeholder="Например: Программирование, Дизайн"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Теги</Label>
            <Input
              id="tags"
              name="tags"
              type="text"
              placeholder="React, JavaScript, Frontend"
              value={formData.tags}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">Файл лекции</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                id="file"
                type="file"
                accept=".mp4,.pdf,.ppt,.pptx"
                onChange={handleFileChange}
                className="hidden"
              />
              <Label htmlFor="file" className="cursor-pointer">
                <Icon
                  name="Upload"
                  size={32}
                  className="mx-auto mb-2 text-muted-foreground"
                />
                <p className="text-sm text-muted-foreground">
                  {formData.file
                    ? formData.file.name
                    : "Выберите файл или перетащите сюда"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Поддерживаются: MP4, PDF, PPT, PPTX
                </p>
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full">
            <Icon name="Upload" size={18} className="mr-2" />
            Загрузить лекцию
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadLectureDialog;
