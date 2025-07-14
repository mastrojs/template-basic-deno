import { html, htmlToResponse } from "mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (_req: Request) =>
  htmlToResponse(
    Layout({
      title: "Hello World",
      children: html`
        <p>Hello World</p>
      `,
    }),
  );
