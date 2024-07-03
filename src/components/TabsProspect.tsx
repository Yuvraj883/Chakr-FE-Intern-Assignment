import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tasks from "./Tasks";

interface TabsProspectProps {
  tasks: string[];
}

const TabsProspect: React.FC<TabsProspectProps> = ({ tasks }) => {
  return (
    <Tabs defaultValue="account" className="min-w-[100%]">
      <TabsList>
        <TabsTrigger value="time-line">Time Line</TabsTrigger>
        <TabsTrigger value="tasks">Tasks</TabsTrigger>
        <TabsTrigger value="notes">Notes</TabsTrigger>
        <TabsTrigger value="files">Files</TabsTrigger>
        <TabsTrigger value="emails">Emails</TabsTrigger>
        <TabsTrigger value="calendar">Calendar</TabsTrigger>
      </TabsList>
      <TabsContent value="tasks"><Tasks tasks={tasks} /></TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default TabsProspect;
