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
            const avatarparent_element = document.getElementsByClassName("UserCard-avatar")[0];
            // if(avatarparent_element){
            //     avatarparent_element.style.position = "relative";
            //     const sb_el = document.createElement("div");
            //     sb_el.className = "ext_staffbadge";
            //     sb_el.innerText = "Staff";
            //     avatarparent_element.append(sb_el);
            // }
            //? Mikai, we moeten alleen nog zorgen dat de avatar class iets anders word. (ExTeNdEn)
            // if (avatarparent_element) {
                extend(HeaderPrimary.prototype, 'items', function(items) {
                    items.add('wdasd', <a href="https://google.com">Gooaw</a>);
                });
                extend(HeaderPrimary.prototype, 'items', function(items) {
                    items.add('staffbadgescr', <script id="extsrc_staffbadge">
                    console.log('Hi, this works lol')
                    </script>);
                });
            // }
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
