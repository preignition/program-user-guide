# Discussion App Release Notes

## [1.0.0] Initial launch (not yet released)

### Yet to do: 

- [x] add FAQ
- [x] add Code of Conduct
- [x] other types of categories can have answers
- [x] remove comments title when there is no comment
- [x] allow to drop images in the editor (downloadURL)
- [x] fix discussion does not display after creation
- [x] redirect to discussions after delete discussion
- [x] review email text (you you)
- [x] add user notification on channel creation (and on add user as editor. This require a new trigger on document creation on entityResource)
- [x] style links
- [x] implement user rights
- [x] style reply 
- [x] reply miss right menu and reaction
- [x] reply should be editable
- [x] allow to mute notifications
- [x] add Contextual help
- [x] add pinned discussions
- [ ] more info when creating discussion (e.g. warning not for survey)
- [ ] add right page for channel
- [ ] add danger zone for freezing channel
- [ ] users not having right to create discussion should be triggered to elevate their account.
- [x] fix vote from discussion list
- [x] add links for unsubscribe
- [x] add orderBy for reply  comments and discussion
- [ ] handle flagged content
- [x] add `from` field in notification emails
- [x] handle email reply and integrate in the list of comments. This includes rethinking email metadata adding 
- [ ] add subscribe to discussion
- [x] add a subscription for all team members
- [x] add a subscription whenever a new team member is added
- [x] add a subscription page to see all subscriptions for a channel
- [x] add a way to subscribe to categories only
- [x] add a way to subscribe to type only
- [x] answered by miss name

### TL:DR;

We are releasing a new app for discussions. This app allows to create and manage discussions in your community. It is possible to create a discussion, add comments, and reply to comments. Users can also upvote comments and react to them.

The objectives of this new release are to:
- Facilitate communication and collaboration with accessiblesurveys.com customers. For instance, customers can ask questions, share ideas, and provide feedback. We believe this will help us better understand our customers' needs, improve our products and services, and allow customers to help each other - and **build a sense of community**.
- Provide an open space for survey respondents to ask questions and share feedback about specific surveys or survey questions. Please contact us if you are interested in a pre-deployment of this feature for one of your surveys; this is not yet released.

The discussion app is developed by [Accessible Surveys](https://accessiblesurveys.com); 

### Discussion App Features

The main entry point of the app is the list of discussions. From there, users can:
- Create a new discussion
- Filter discussions by categories
- Search for discussions and answers (search yet to be implemented)

The discussion list presents the discussions in a list-item format. Each item displays the discussion title, the number of comments, the number of upvotes, the author, the creating date, number of participants (with their avatar), and some specific attributes depending on the category of discussion. 

> ![discussion discussion list](https://github.com/preignition/public/assets/1168053/1e1cd53e-4092-4568-b0e6-9e89873c1a10)
> Screenshot of the list item - different categories are displayed the left

The discussion app has 3 levels of content. The highest level is a **discussion**. A discussion is a topic that can be discussed. A discussion can have multiple **comments**. A comment is a response to a discussion. A comment can have multiple **replies**. A reply is a response to a comment. 

Discussions are grouped by **channels**. A channel is a group of discussions. Channels are created by teams. There is currently only one [main generic channel](https://accessiblesurveys.com/home/discussion/main/discussions); in a near future each team could create new channels, for instance for a specific survey. 

Within a channel, discussions are grouped by **categories**. A category is a group of discussions. Categories are managed by the channel owner. Available categories are:
- `General` for general discussions
- `Questions` for questions questions and answers
- `Ideas` for sharing ideas
- `Feedback` for sharing feedback
- `Bug` report for reporting bugs
- `Announcements` for channel owner to make announcements 
- `Polls` for taking short polls within a community (not yet implemented)

The channel owner can add or remove categories, but `General`, `Announcements` and `Questions` are always displayed.

>![discussion category](https://github.com/preignition/public/assets/1168053/f3c9db9a-7bcc-4de9-a620-e4c51ff3a310)
>
> Screenshot for choosing a category when creating a discussion 

When a user clicks on a discussion, the discussion details are displayed. The discussion details include the discussion title, the discussion content, the number of upvotes, the number of comments, the author, the creation date, and the last update date. The discussion details also display the comments. Each comment displays the author, the creation date, the content, the number of upvotes, and the replies. 

>![discussion start a discussion](https://github.com/preignition/public/assets/1168053/a4d12999-827c-48b8-a17f-e71f8246530b)
>
> Screenshot when a user starts a discussion

Content is written in markdown. This allows to easily format the content, add links, images or videos. The rendering of content can be previewed before posting.

> ![discussion comment](https://github.com/preignition/public/assets/1168053/8d284709-287a-44e7-a066-ee08685f0ea2)
>
> Screenshot of a comment

Some categories have special behaviors. For instance only the channel owners or maintainer can create discussion is the `Announcement` category. 

For `Question` category type (as well as `general`, `feedback` and `ideas`), the discussion is automatically marked as `not answered` when created. The author of the discussion can mark the discussion as `answered` by selecting a comment as the answer. Whether a discussion is answered or not is displayed in the discussion list. The answer to the question appears at the top of the comments, and is highlighted.

> ![discussion answered discussion](https://github.com/preignition/public/assets/1168053/12150e2e-d9a9-4d13-b4da-4d7f34d8032e)
>
> Screenshot of an answered question

Users can react to content items. Discussions and comments can be upvoted. This aims at promoting the most relevant content and to show appreciation. It is further possible to react to discussions, comments and replies with emojis. The emojis are displayed below the content item. The following emojis are available: `like`, `dislike`, `laugh`, `hooray`, `love`, `confused`, `looking at this`. Users see their own reactions (highlighted in the main application color) and the reactions of other users (counted by reaction).

> ![discussion reaction](https://github.com/preignition/public/assets/1168053/5a384101-ed9c-4af9-833c-0b7058cd717b)
> Screenshot of the emojis, with the `hooray` emoji selected

Owners of content items can also edit or delete their content. Anyone can mark a content as not appropriate. The content is then hidden and the channel owner is notified. The channel owner can then decide to delete the content or to unhide it and/or ban a user for a specific period of time.

> ![discussion card menu](https://github.com/preignition/public/assets/1168053/4e533851-6e8a-4306-a950-bfdfe6d8a143)
>
> Screenshot of the menu when clicking on the 3 dots on the right of a content item

Users can subscribe to discussions. When a user subscribes to a discussion, they receive an email notification when a content is added to the discussion. The owner of the discussion is automatically subscribed to the discussion, as well as any contributor to the discussion (post a comment, or a reply). 

Accessible surveys customers (e.g. all users who have been added to a team) are automatically subscribed announcements in the main channel. They receive an email notification when a new announcement is posted.

> ![discussion email](https://github.com/preignition/public/assets/1168053/e6c7fb70-a08b-4e57-bd25-8c40503dd7fe)
> Screenshot of an email received when a user is subscribed to a discussion

Any user can subscribe to a discussion to receive notifications when a new comment is added. 

Replying to the email will add the reply to the discussion thread.

The owner (and maintainers) of a channel automatically receives an email notification when any content is created in the channel. 

Any subscription can ber muted (you will not receive any email notification) or deleted.

It is possible for channel owners and editors to pin certain discussions to the top of the list. Pinned discussions are displayed at the top of the list, and are highlighted.

> ![discussion-pinned](https://github.com/preignition/public/assets/1168053/e83df705-5a8b-448f-88e7-15acfcd65c47)
>
> Screenshot of a pinned discussion, appearing at the top of the app.

### Channels

Channels are created by teams or automatically when teams activate applications requiring channels (for instance, the blog application).

> ![discussion channel](https://github.com/preignition/public/assets/1168053/c069e208-ac00-4b59-bd4b-71d263e713ee)
>
> Screenshots of the create channel view from the customer app

Channel owners can add or remove categories. They can also add or remove maintainers. 

Channels have 2 levels of access:
- `Public` channels are visible to everyone. Users belonging to a `team` can create discussion. Anyone signed-in with a verified email address can join and participate in the discussions. Anyone signed-in can react and vote on content.
- `Private` channels are visible to channel members only; only channel members can join and participate in the discussions. Members are invited by the channel owner or editors. 

### Accessibility

The discussion app strives to follow accessibility best practice and standards. At the time of this early release, accessibility testing is done in-house.

Discussion items, comments and replies are aware of which accessibility settings are being activated on the platform. For instance, [is is possible to use specific class to show or hide content depending on activation of accessibility settings](https://accessiblesurveys.com/s/help/documentation/faq/md/accessibility-mode.md).

We are interested to hear from you if you have any further accessibility requirements or feedback. There might be use cases we have not yet considered or thought of. For instance, would read-aloud be useful, or should we allow voice-based posts, or shall the `easyread` mode further simplify the current interface ?


### Interactive Help

The discussion app includes an interactive help. The help is available from the main menu, or on the press of the `F1` key. It is also activated the first time a user lands on the app. The help is context-sensitive and provides information about the current page. 

> ![discussion interactive help](https://github.com/preignition/public/assets/1168053/8a8fc9d0-645b-4358-b86b-1a00398c2ce1)
> 
> Screenshot of the interactive help

### Yet to come

This is an early release of the discussion app. We are still working on the following features:
- Search for discussions and answers 
- Persist draft locally (before posting) so that the user does not lose their content if they navigate away from the page
- Better handle potential flagged/inappropriate content moderation
- Implement manual subscription to channel and discussion, so that users can receive notifications for all new content in a channel or a discussion


---
Images for this release note are stored in [release-note-images](https://github.com/preignition/public/issues/4)