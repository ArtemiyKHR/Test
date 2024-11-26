import { z } from "zod";

enum roles {
  ANT = "Подрядчик",
  ANT_MANAGER = "Менеджер",
  ANT_OFFICER = "Секретарь",
  DEVELOPER = "Разработчик",
}

export const workBorders = [
  { id: 1, name: "Белгатой" },
  { id: 2, name: "Шали" },
  { id: 3, name: "Урус-Мартан" },
];

export const formSchema = z.object({
  name: z.string().min(3, "Минимальная длинна имени 3 символа!"),
  surname: z.string().min(3, "Минимальная длинна фамилии 3 символа!"),
  patronymic: z.string().min(3, "Минимальная длинна отчества 3 символа!"),
  roles: z.nativeEnum(roles),
  workBorders: z.nativeEnum(workBorders),
  password: z.string().min(4, "Минимальная длинна пароля 4 символа!"),
});

export type formSchemaT = z.infer<typeof formSchema>;
