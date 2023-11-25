import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty()
    readonly content: string;

    readonly description?: string;

    readonly project_id?: string;

    readonly section_id?: string;

    readonly parent_id?: string;

    readonly order?: number;

    readonly labels?: string[];

    readonly priority?: number;

    readonly due_string?: string;

    readonly due_date?: string;

    readonly due_datetime?: string;

    readonly due_lang?: string;

    readonly assignee_id?: string;

    readonly duration?: number;

    readonly duration_unit?: number;
}