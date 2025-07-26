
import { Filter, Smartphone, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FilterSidebar = ({ selectedCategory, setSelectedCategory }: FilterSidebarProps) => {
  const categories = [
    { id: 'all', label: 'All Categories', count: 1250 },
    { id: 'social', label: 'Social', count: 234 },
    { id: 'music', label: 'Music', count: 156 },
    { id: 'transportation', label: 'Transportation', count: 89 },
    { id: 'travel', label: 'Travel', count: 167 },
    { id: 'entertainment', label: 'Entertainment', count: 298 },
    { id: 'communication', label: 'Communication', count: 145 },
    { id: 'productivity', label: 'Productivity', count: 123 },
    { id: 'shopping', label: 'Shopping', count: 201 },
    { id: 'finance', label: 'Finance', count: 87 },
  ];

  const platforms = [
    { id: 'ios', label: 'iOS', count: 850 },
    { id: 'android', label: 'Android', count: 400 },
  ];

  return (
    <aside className="w-64 bg-white border border-gray-200 rounded-xl p-6 h-fit">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">Filters</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>{category.label}</span>
                <span className="text-xs text-gray-400">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Platform</h4>
          <div className="space-y-1">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  {platform.label}
                </span>
                <span className="text-xs text-gray-400">{platform.count}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <Button variant="outline" className="w-full border-gray-300 text-gray-600 hover:bg-gray-50">
            Clear Filters
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
