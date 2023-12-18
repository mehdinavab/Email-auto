export interface IPostConfigRequestDto {
  email_address: string;
  group_id: string;
  bot_id: string;
  server_name: number;
}

export interface IPostConfigResponseDto {
  id: number;
  email_address: string;
  group_id: string;
  bot_id: string;
  server_name: number;
}
