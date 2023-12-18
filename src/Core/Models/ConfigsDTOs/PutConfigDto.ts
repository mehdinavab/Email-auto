export interface IPutConfigRequestDto {
  email_address: string;
  group_id: string;
  bot_id: string;
  server_name: number;
}
export interface IPutConfigResponseDto {
  id: number;
  email_address: string;
  group_id: string;
  bot_id: string;
  server_name: number;
}
