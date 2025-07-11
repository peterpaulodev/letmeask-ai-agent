import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod/v4'
import { useCreateRoom } from '@/http/use-create-room'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

// z.object -> Cria um schema de validação
const createRoomSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  description: z.string(),
})

// z.infer -> Transforma a validação em tipos para Typescript
type CreateRoomFormData = z.infer<typeof createRoomSchema>

export function CreateRoomForm() {
  const { mutateAsync: createRoom } = useCreateRoom()

  const createRoomForm = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  async function handleCreateRoom(data: CreateRoomFormData) {
    await createRoom(data)
    await createRoomForm.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar sala</CardTitle>
        <CardDescription>
          Crie uma nova sala para começar a fazer perguntas e receber repostas
          da I.A.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...createRoomForm}>
          <form
            className="flex flex-col gap-4"
            onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
          >
            <FormField
              control={createRoomForm.control}
              name="name"
              render={({ field }) => (
                <div>
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Nome da sala..." />
                    </FormControl>
                    <FormDescription>Nome da sala</FormDescription>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <FormField
              control={createRoomForm.control}
              name="description"
              render={({ field }) => (
                <div>
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Descrição da sala..." />
                    </FormControl>
                    <FormDescription>Descrição da sala</FormDescription>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <Button className="w-full cursor-pointer" type="submit">
              Criar sala
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
