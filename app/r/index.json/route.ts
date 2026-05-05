import { NextResponse } from 'next/server';
import { registry } from '@/registry/registry';

export async function GET() {
  const index = registry.map((item) => ({
    name: item.name,
    type: item.type,
    description: item.description,
    dependencies: item.dependencies,
    registryDependencies: item.registryDependencies,
  }));

  return NextResponse.json(index);
}
