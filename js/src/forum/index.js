import { extend } from 'flarum/extend';
import app from 'flarum/app';
import EditUserModal from 'flarum/common/components/EditUserModal';

extend(EditUserModal.prototype, 'fields', function (items) {
    items.add('hasbadge',
        <div className="Form-group">
            <label>{app.translator.trans('serakoi-flarumstaffbadge.forum.edit_user.heading')}</label>
            <input className="FormControl"
                placeholder={extractText(app.translator.trans('serakoi-flarumstaffbadge.forum.edit_user.placeholder'))}
                bidi="test" />
        </div>, 100)
});