import {Github} from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from '@radix-ui/react-separator';
import { Textarea } from './components/ui/textarea';

export function App() {

  const separatorStyles = {
    backgroundColor: 'violet-400', 
    width: '0.075em', 
    height: '1.56em', 
  };
  
  return (
    <div className='min-h-screen flex flex-col'>
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

      <main className='flex-1 p-6 flex gap-6'>
        <div className='flex flex-col flex-1'>
          <div className='grid grid-rows-2 gap-4 flex-1'>

            <Textarea
            className='resize-none p-4 leading-relaxed'
             placeholder='Inclua o prompt para a IA...'
             />
            <Textarea 
            className='resize-none p-4 leading-relaxed'
            placeholder='Resultado gerado pela IA...' readOnly
            />


          </div>
          <p className='text-sm text-muted-foreground'>Lembre-se: você pode usar a variável <code className='text-violet-400'>{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>
        </div>
        <aside className='w-80'></aside>
      </main>
    </div>
    
    
  )
}