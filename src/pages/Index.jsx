import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Feline Friends</CardTitle>
            <CardDescription>Discover the world of cats</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Cats are fascinating creatures that have been domesticated for thousands of years. 
              Known for their independence, agility, and affectionate nature, cats make wonderful companions.
            </p>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
              alt="A cute cat" 
              className="mx-auto object-cover w-full h-[300px] rounded-lg mb-4"
            />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Cat Characteristics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Retractable claws</li>
                <li>Excellent night vision</li>
                <li>Flexible spine</li>
                <li>Sensitive whiskers</li>
                <li>Rough tongue for grooming</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Cat Breeds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Siamese</li>
                <li>Maine Coon</li>
                <li>Persian</li>
                <li>Bengal</li>
                <li>Scottish Fold</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
