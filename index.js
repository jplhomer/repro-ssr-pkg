import { renderToString } from "react-dom/server";

export function render(app) {
  return renderToString(app);
}
