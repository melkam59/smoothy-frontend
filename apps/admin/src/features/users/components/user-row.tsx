import type { ReactNode } from "react";

export type UserRowProps = {
  name: string;
  email: string;
  role: "customer" | "vendor" | "admin";
  actions?: ReactNode;
};

export function UserRow({ name, email, role, actions }: UserRowProps) {
  return (
    <div data-testid="user-row" className="flex items-center justify-between gap-4 p-2">
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-sm text-muted-foreground">{email}</div>
      </div>
      <span data-testid="user-role" className="text-xs uppercase">
        {role}
      </span>
      {actions}
    </div>
  );
}
