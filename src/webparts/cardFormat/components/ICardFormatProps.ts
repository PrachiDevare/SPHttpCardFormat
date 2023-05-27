import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ICardFormatProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;

  listName:string;
  siteURL:string;
  context:WebPartContext;

}
