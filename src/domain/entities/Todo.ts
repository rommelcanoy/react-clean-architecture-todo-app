export default class Todo {
  timestamp: any
  text: string
  completed: boolean

  constructor(timestamp: any, text: string, completed: boolean) {
    this.timestamp = timestamp
    this.text = text
    this.completed = completed
  }
}