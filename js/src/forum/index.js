import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';
import extractText from 'flarum/common/utils/extractText';
import Stream from 'flarum/common/utils/Stream';
import EditUserModal from 'flarum/common/components/EditUserModal';
import UserCard from 'flarum/forum/components/UserCard';
import PostUser from 'flarum/forum/components/PostUser';

app.initializers.add('serakoi/flarumstaffbadge', () => {
  User.prototype.staffBadge = Model.attribute('staffBadge');

  extend(PostUser.prototype, 'oncreate', function (_out, vnode) {
    const user = this.attrs.post.user();

    if (!user) return;

    const data = user.data.attributes;
    const badge = data.staffBadge;

    if (!badge) return;
    if (badge.toLowerCase() !== 'true') return;

    let staffBadgeText = app.forum.attribute('staffBadgeTitle')?.toString();
    let staffBadgeColor = app.forum.attribute('staffBadgeColor')?.toString();
    let staffBadgeBg = app.forum.attribute('staffBadgeBg')?.toString();

    if (!staffBadgeText) staffBadgeText = 'STAFF';
    if (staffBadgeText == '') staffBadgeText = 'STAFF';
    if (!staffBadgeBg) staffBadgeBg = 'rgb(70, 209, 96)';
    if (staffBadgeBg == '') staffBadgeBg = 'rgb(70, 209, 96)';
    if (!staffBadgeColor) staffBadgeColor = '#fff';
    if (staffBadgeColor == '') staffBadgeColor = '#fff';

    const anchor = vnode.dom;

    if (!anchor) return console.log('No anchor found');
    const newEl = document.createElement('div');
    newEl.className = 'badgeHolder';
    newEl.innerHTML = `<div style="background-color:${staffBadgeBg};color:${staffBadgeColor}" class="ext_staffbadge_sm">
            ${staffBadgeText}
        </div>`;

    anchor.appendChild(newEl);
  });

  extend(UserCard.prototype, 'oncreate', function (_out, vnode) {
    const card_user = this.attrs.user.data.attributes;
    if (card_user.staffBadge) {
      if (card_user.staffBadge.toLowerCase() === 'true') {
        let staffBadgeText = app.forum.attribute('staffBadgeTitle')?.toString();
        let staffBadgeColor = app.forum.attribute('staffBadgeColor')?.toString();
        let staffBadgeBg = app.forum.attribute('staffBadgeBg')?.toString();

        if (!staffBadgeText) staffBadgeText = 'STAFF';
        if (staffBadgeText == '') staffBadgeText = 'STAFF';
        if (!staffBadgeBg) staffBadgeBg = 'rgb(70, 209, 96)';
        if (staffBadgeBg == '') staffBadgeBg = 'rgb(70, 209, 96)';
        if (!staffBadgeColor) staffBadgeColor = '#fff';
        if (staffBadgeColor == '') staffBadgeColor = '#fff';

        const userCardDom = vnode.dom;
        const avatarDom = userCardDom.querySelector('.UserCard-avatar');
        const avatarStaffElement = document.createElement('div');

        avatarStaffElement.classList.add('ext_staffbadge');
        avatarStaffElement.style.color = staffBadgeColor;
        avatarStaffElement.style.backgroundColor = staffBadgeBg;
        avatarStaffElement.innerText = staffBadgeText;
        avatarDom.append(avatarStaffElement);
      }
    }
  });

  extend(EditUserModal.prototype, 'oninit', function () {
    this.status = Stream(this.attrs.user.staffBadge() || '');
  });

  extend(EditUserModal.prototype, 'fields', function (items) {
    items.add(
      'hasbadge',
      <div className="Form-group">
        <label>{app.translator.trans('serakoi-flarumstaffbadge.forum.edit_user.heading')}</label>
        <input
          className="FormControl"
          placeholder={extractText(app.translator.trans('serakoi-flarumstaffbadge.forum.edit_user.placeholder'))}
          bidi={this.status}
        />
      </div>,
      100
    );
  });

  extend(EditUserModal.prototype, 'data', function (data) {
    data.staffBadge = this.status();
  });
});
