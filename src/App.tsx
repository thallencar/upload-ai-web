import { Github, FileVideo , Upload, Wand2} from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from '@radix-ui/react-separator';
import { Textarea } from './components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {

  const separatorStyles = {
    backgroundColor: 'violet-400', 
    width: '0.075em', 
    height: '1.56em', 
  };
  
  return (
    <div className='min-h-screen flex flex-col'> {/* min-h-scr: 100vh, fiv ocupa a tela toda*/}
      <div className="px-6 pv-3 flex items-center justify-between border-b"> {/* border b: button width*/}
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
            /> {/* resize-none: user não consegue redimensionar o bloco / leading-relax: line height 160%, ideal para textos um abaixo do outro / readonly: texto não editável*/}

          </div>
            <p className='text-sm text-muted-foreground'>Lembre-se: você pode usar a variável <code className='text-violet-400'>{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
            </p> {/* txt-sm: texto pequeno / txt-muted-f: ideal para aplicação light-dark mode e deixa menos opaco*/}
        </div>

        <aside className='w-80 space-y-6'> {/* space y: 24px entre cada elemento dentro da div*/}
          <form className='space-y-6'>
            <label 
              htmlFor='video'
              className='border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/10' 
            > {/* rouded-md: seta a border / aspect-video: faz com que o elemento respeite o padrão de dimensionamento (16:9) / cursor-pointer: muda o cursor / border-dashed: pontilhado na borda*/}
              <FileVideo className='w-4 h-4'/>
              Selecione um Vídeo
            </label>

            <input type='file' id='video' accept='video/mp4' className='sr-only'/> {/* dá pra carregar vídeo pela label através input video, por isso esconderei o input (sr-only*/}

            <Separator/>
            <div className='space-y-2'>
              <Label htmlFor='transcription_prompt'>Prompt de transcrição</Label>
              <Textarea 
                id='transcription_prompt' 
                className='h-20 leading-relaxed resize-none'
                placeholder='Inclua palavras chave mencionadas no vídeo, separadas por vírgula.'
                /> 
            </div>

            <Button type='submit' className='w-full'>
              Carregar Vídeo
              <Upload className='w-4 h-4 ml-2'/>
            </Button>
          </form>

          <Separator/>

          <form className='space-y-6'>
          <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Selecione um prompt...'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='title'>Título do YouTube</SelectItem>
                  <SelectItem value='description'>Descrição do YouTube</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className='block text-sm text-muted-foreground italic'>Você poderá customizar essa opção em breve!
              </span>
            </div>

            <Separator/>
            <div className='space-y-4'>
              <Label>Temperatura</Label>
              
              <span className='block text-sm text-muted-foreground italic'>Valores mais altos tendem a deixar o resultado mais criativo, mas com possíveis erros.
              </span>
              <Slider
              min={0}
              max={2}
              step={0.1}
              />
            </div>

            <Separator/>

            <Button type='submit' className='w-full'>
              Executar
              <Wand2 className='w-4 h-4 ml-2'/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
    
    
  )
}