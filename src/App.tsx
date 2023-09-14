import {Github} from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from '@radix-ui/react-separator';

export function App() {

  const separatorStyles = {
    backgroundColor: '#8A2BE2', 
    width: '0.075em', 
    height: '1.56em', 
  };
  
  return (
    <div className="px-6 pv-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">upload.ai</h1>

      <div className=" flex items-center gap-3">
        <span className="text-sm font-thin text-muted-foreground">Desenvolvido com 💜 no NLW da Rocketseat
        </span>

        <Separator orientation='vertical' style={separatorStyles} className='h-6'/>


        <Button variant={"outline"}>
          <Github className='w-3.5 h-4 mr-2.5'/>
          Github
        </Button>
      </div>
    </div>
  )
}