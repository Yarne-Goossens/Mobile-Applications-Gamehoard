export class Settings {
  darkmode: boolean;

  constructor(settings: {darkmode: boolean}) {
    this.darkmode = settings.darkmode;
  }
}
