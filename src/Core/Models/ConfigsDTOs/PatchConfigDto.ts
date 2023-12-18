export interface IPatchConfigRequestDto {
  email_address: string;
  group_id: string;
  bot_id: string;
  server_name: number;
}
export interface IPatchConfigResponseDto {
  id: number;
  email_address: string;
  group_id: string;
  bot_id: string;
  server_name: number;
}
