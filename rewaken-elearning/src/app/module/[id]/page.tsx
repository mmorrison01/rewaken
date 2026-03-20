import { modules } from "@/data/modules";
import ModuleClient from "./ModuleClient";

export function generateStaticParams() {
  return modules.map((m) => ({ id: String(m.id) }));
}

export default async function ModulePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ModuleClient moduleId={parseInt(id)} />;
}
