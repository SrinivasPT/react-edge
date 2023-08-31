import { InputControl, TextControl } from '@lib/controls';
import TableControl from '@lib/controls/organisms/table-control/table-control';

const ControlTypeMap: any = {
    INPUT: InputControl,
    TEXT: TextControl,
    TABLE: TableControl,
};

export default ControlTypeMap;
