export interface IPutMailAuthInfoRequestDto {
  server_name: string;
  password: string;
  tenant_id: string;
  client_id: string;
  secret: string;
  authority: string;
  scope: string;
}
export interface IPutMailAuthInfoResponseDto {
  id: number;
  server_name: string;
  password: string;
  tenant_id: string;
  client_id: string;
  secret: string;
  authority: string;
  scope: string;
}
