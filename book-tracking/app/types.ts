export type BookRepository = {
   id: number;
   title: string;
   status: 'to-read' | 'in-progress' | 'completed'
}

export const headers = {
   'Content-Type': 'application/json'
}