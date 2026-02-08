import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export default function MappingExample() {
  // Sample data array
  const products: Product[] = [
    { id: 1, name: "Smart Lock", price: 199.99, category: "Security" },
    { id: 2, name: "Deadbolt", price: 89.99, category: "Locks" },
    { id: 3, name: "Key Safe", price: 49.99, category: "Storage" },
    { id: 4, name: "Door Closer", price: 129.99, category: "Hardware" },
  ];

  // Example 1: Basic mapping
  const basicList = products.map(product => (
    <li key={product.id}>{product.name}</li>
  ));

  // Example 2: Mapping with conditions
  const expensiveProducts = products
    .filter(product => product.price > 100)
    .map(product => (
      <Card key={product.id} className="mb-4">
        <CardContent className="pt-6">
          <h3 className="font-bold">{product.name}</h3>
          <p className="text-primary">${product.price}</p>
        </CardContent>
      </Card>
    ));

  // Example 3: Mapping with object transformation
  const productsByCategory = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">React Mapping Examples</h1>

      {/* Example 1: Basic Mapping */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Basic List Mapping</h2>
        <ul className="list-disc pl-6">
          {basicList}
        </ul>
      </section>

      {/* Example 2: Conditional Mapping */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Products Over $100</h2>
        <div>
          {expensiveProducts}
        </div>
      </section>

      {/* Example 3: Complex Mapping */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Products by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(productsByCategory).map(([category, items]) => (
            <Card key={category}>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item.id} className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="text-primary">${item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}