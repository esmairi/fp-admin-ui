import type {Field} from "@fastadm/types/Field.ts";
import type {ModelData} from "@fastadm/types/ModelInfo.ts";

interface Props{
    field: Field;
    data: ModelData;
}

export function ListField(props: Props) {
    return (
        <>{props.data[props.field.name]}</> // TODO display the nice way of field value: based on field_type
    )
}