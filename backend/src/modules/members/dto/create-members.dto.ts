/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

/**
 * A data transfer object
 */
export class CreateMembersDTO {
  readonly hn: string;
  readonly name: string;
  readonly address: string;
  readonly birtdate: Date;
  readonly disease: string;
  readonly allegric: string;
  // more fields at this point
}
