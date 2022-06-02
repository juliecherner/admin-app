export type Admin = {
  name: string;
  password: string;
  logged?: boolean;
};

export type AuthHeader = {
  headers: {
    Authorization: string;
  };
};

export type Contact = {
  id: number;
  name: string;
  number: number | null;
};

export type TableQuality = {
  id?: number;
  type: "pros" | "cons";
  text: string;
};

export type Todo = {
  id?: number;
  name: string;
  created_at?: Date;
};

export type User = {
  id: number | null;
  name: string;
};

export type Response = {
  text: string;
  severity: "error" | "success" | "";
};

export type Content = {
  todos: boolean;
  table: boolean;
  contacts: boolean;
};
