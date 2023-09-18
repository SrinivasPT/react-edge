import { InputControl, NumberControl, PasswordControl, SelectControl, TelephoneControl, TextControl, UrlControl } from '@lib/controls';
import DateControl from '@lib/controls/molecules/date-control/date-control';
import EmailControl from '@lib/controls/molecules/input-control/email-control';
import TableControl from '@lib/controls/organisms/table-control/table-control';

const ControlTypeMap: any = {
    INPUT: InputControl,
    TEXT: TextControl,
    NUMBER: NumberControl,
    EMAIL: EmailControl,
    PASSWORD: PasswordControl,
    TELEPHONE: TelephoneControl,
    DATE: DateControl,
    URL: UrlControl,
    TEXTAREA: TextControl,
    SELECT: SelectControl,
    TABLE: TableControl,
};

export default ControlTypeMap;
