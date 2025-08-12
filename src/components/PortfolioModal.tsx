import React from 'react';
import { X, ExternalLink, Calendar, Users, Award, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  results: string[];
  timeline: string;
  teamSize: string;
  status: string;
}

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  portfolioItems: PortfolioItem[];
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ 
  isOpen, 
  onClose, 
  serviceTitle, 
  portfolioItems 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{serviceTitle} Portfolio</h2>
              <p className="text-primary-foreground/90">
                Explore our successful implementations and case studies
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-primary-foreground hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Image */}
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl text-muted-foreground/30 mb-2">🏥</div>
                        <p className="text-muted-foreground text-sm">{item.category}</p>
                      </div>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-primary/90">
                      {item.status}
                    </Badge>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <div className="space-y-1">
                          {item.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                        <div className="text-center">
                          <Calendar className="h-4 w-4 text-muted-foreground mx-auto mb-1" />
                          <div className="text-xs text-muted-foreground">Timeline</div>
                          <div className="text-sm font-medium">{item.timeline}</div>
                        </div>
                        <div className="text-center">
                          <Users className="h-4 w-4 text-muted-foreground mx-auto mb-1" />
                          <div className="text-xs text-muted-foreground">Team Size</div>
                          <div className="text-sm font-medium">{item.teamSize}</div>
                        </div>
                        <div className="text-center">
                          <Award className="h-4 w-4 text-muted-foreground mx-auto mb-1" />
                          <div className="text-xs text-muted-foreground">Category</div>
                          <div className="text-sm font-medium">{item.category}</div>
                        </div>
                      </div>

                      {/* Results */}
                      {item.results.length > 0 && (
                        <div className="bg-primary/5 rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-primary">Results Achieved</h4>
                          <div className="space-y-1">
                            {item.results.map((result) => (
                              <div key={result} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <Button className="w-full" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Case Study
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;