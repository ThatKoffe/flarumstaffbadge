import { extend } from 'flarum/extend';
import app from 'flarum/app';
import EditUserModal from 'flarum/common/components/EditUserModal';
import Model from 'flarum/Model';
import User from 'flarum/common/models/User';
import extractText from 'flarum/common/utils/extractText';
import Stream from 'flarum/common/utils/Stream';
import Button from 'flarum/common/components/Button';
import UserPage from 'flarum/forum/components/UserPage';
import UserCard from 'flarum/forum/components/UserCard';
import ClassList from 'flarum/common/utils/classList';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';

app.initializers.add('serakoi/flarumstaffbadge', () => {
    User.prototype.staffBadge = Model.attribute('staffBadge');

    extend(UserPage.prototype, 'show', function (page_user) {
        console.log(this);
        const user = this.user.data.attributes;
        if(user.staffBadge) {
            if(user.staffBadge.toLowerCase() != "true") return;
            extend(UserCard.prototype, 'oncreate', function(_out, vnode) {
                let staffBadgeText = app.forum.attribute('staffBadgeTitle')?.toString();
                let staffBadgeColor = app.forum.attribute('staffBadgeColor')?.toString();
                if(!staffBadgeText) staffBadgeText = "STAFF";
                if(staffBadgeText == "") staffBadgeText = "STAFF";
                if(!staffBadgeColor) staffBadgeColor = "rgb(70, 209, 96)";
                if(staffBadgeColor == "") staffBadgeColor = "rgb(70, 209, 96)";
                const userCardDom = vnode.dom;
                const avatarDom = userCardDom.querySelector('.UserCard-avatar');
                const avatarStaffElement = document.createElement("div");
                avatarStaffElement.classList.add("ext_staffbadge");
                avatarStaffElement.innerText = staffBadgeText;
                avatarDom.append(avatarStaffElement);
            });
        }
    });

    extend(EditUserModal.prototype, 'oninit', function () {
        this.status = Stream(this.attrs.user.staffBadge() || '');
    });

    extend(EditUserModal.prototype, 'fields', function (items) {
        items.add('hasbadge',
            <div className="Form-group">
                <label>{app.translator.trans('serakoi-flarumstaffbadge.forum.edit_user.heading')}</label>
                <input className="FormControl"
                    placeholder={extractText(app.translator.trans('serakoi-flarumstaffbadge.forum.edit_user.placeholder'))}
                    bidi={this.status} />
            </div>, 100)
    });

    extend(EditUserModal.prototype, 'data', function (data) {
        data.staffBadge = this.status();
    });
});
