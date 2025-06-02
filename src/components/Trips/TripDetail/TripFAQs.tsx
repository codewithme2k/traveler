"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface FAQ {
  question: string;
  answer: string;
}

interface TripFAQsProps {
  faqs: FAQ[];
}

export function TripFAQs({ faqs }: TripFAQsProps) {
  const [expandAll, setExpandAll] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    if (expandedQuestions.includes(index)) {
      setExpandedQuestions(expandedQuestions.filter((q) => q !== index));
    } else {
      setExpandedQuestions([...expandedQuestions, index]);
    }
  };

  const handleExpandAllChange = (checked: boolean) => {
    setExpandAll(checked);
    if (checked) {
      setExpandedQuestions(faqs.map((_, index) => index));
    } else {
      setExpandedQuestions([]);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">FAQs</h2>
        <div className="flex items-center space-x-2">
          <Label htmlFor="expand-all-faqs" className="text-sm text-foreground">
            Expand all
          </Label>
          <Switch
            id="expand-all-faqs"
            checked={expandAll}
            onCheckedChange={handleExpandAllChange}
          />
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isExpanded = expandedQuestions.includes(index);
          return (
            <div
              key={index}
              className="border border-gray-100 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="font-medium text-foreground">{faq.question}</h3>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>

              {isExpanded && (
                <div className="p-4 pt-0 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
