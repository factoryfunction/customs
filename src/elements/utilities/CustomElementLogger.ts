export default class CustomElementLogger {
  public name: string
  public logs: any[]

  constructor(name) {
    this.name = name
    this.logs = []
  }

  public log = (...m) => {
    this.logs.push(m)
    console.log(this.name, ' >>> ', ...m)
  }
}
