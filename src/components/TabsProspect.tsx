import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TabsProspect = ()=>{
  return(
    <>
  <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="time-line">Time Line</TabsTrigger>
    <TabsTrigger value="tasks">Tasks</TabsTrigger>
    <TabsTrigger value="notes">Notes</TabsTrigger>
    <TabsTrigger value="files">Files</TabsTrigger>
    <TabsTrigger value="emails">Emails</TabsTrigger>
    <TabsTrigger value="calendar">Calendar</TabsTrigger>


  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

    </>
  )
}
export default TabsProspect; 
