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
- [ ] allow to mute notifications
- [x] style links
- [x] implement user rights
- [x] style reply 
- [x] reply miss right menu and reaction
- [x] reply should be editable
- [ ] add Contextual help
- [x] add pinned discussions
- [ ] more info when creating discussion (e.g. warning not for survey)
- [ ] add right page for channel
- [ ] add danger zone for freezing channel
- [ ] add links for unsubscribe
- [x] add orderBy for reply  comments and discussion
- [ ] handle flagged content
- [ ] add `from` field in notification emails
- [ ] handle email reply and integrate in the list of comments. This includes rethinking email metadata and adding 
- [ ] add subscribe to discussion
- [x] answered by miss name

### TL:DR;

We are releasing a new app for discussions. This app allows to create and manage discussions in your community. It is possible to create a discussion, add comments, and reply to comments. Users can also upvote comments and react to them.

The objectives of this app are to:
- Facilitate communication and collaboration with accessiblesurveys.com customers. For instance, customers can ask questions, share ideas, and provide feedback. We believe this will help us better understand our customers' needs and improve our products and services, and allow customers to help each other, and build a sense of community.
- Provide a space for survey editors to discuss with survey respondents who could face difficulties or have questions about a specific survey. This is not yet released but planned in the near future.

Discussions are posted on channels. Any team can great channels. 

The discussion app is developed by [Accessible Surveys](https://accessiblesurveys.com); 

## Discussion App Features

The main entry point of the app is the list of discussions. From there, users can:
- Create a new discussion
- Filter discussions by categories
- Search for discussions and answers (not yet implemented)

The discussion list displays the discussions in a list-item format. Each item displays the discussion title, the number of comments, the number of upvotes, the author, the creating date, number of participants (with their avatar), and some specific attributes depending on the category of discussion. 

> ![discussion discussion list](https://github.com/preignition/public/assets/1168053/1e1cd53e-4092-4568-b0e6-9e89873c1a10)
> Screenshot of the list item - different categories are displayed the left

The discussion app has 3 levels of content. The highest level is a **discussion**. A discussion is a topic that can be discussed. A discussion can have multiple **comments**. A comment is a response to a discussion. A comment can have multiple **replies**. A reply is a response to a comment. 

Discussions are grouped by **channels**. A channel is a group of discussions. Channels are created by teams.

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

Content is written in markdown. This allows to format the content, add links, images, code snippets and videos. The rendering of content can be previewed before posting.

> ![discussion comment](https://github.com/preignition/public/assets/1168053/8d284709-287a-44e7-a066-ee08685f0ea2)
>
> Screenshot of a comment

Some categories have special behaviors. For instance, the `Announcements` category is read-only. Only the channel owner can create an announcement. 

For `Question` category type (as well as `general`, `feedback` and `ideas`), the discussion is automatically marked as `not answered` when created. The author of the discussion can mark the discussion as `answered` by selecting a comment as the answer. Whether a discussion is answered or not is displayed in the discussion list. The answer to the question appears at the top of the comments, and is highlighted.

> ![discussion answered discussion](https://github.com/preignition/public/assets/1168053/12150e2e-d9a9-4d13-b4da-4d7f34d8032e)
>
> Screenshot of an answered question

Users can react to content items. Discussions and comments can be upvoted. This aims at promoting the most relevant content and to show appreciation. It is further possible to react to discussions, comments and replies with emojis. The emojis are displayed below the content item. The following emojis are available: `like`, `dislike`, `laugh`, `hooray`, `love`, `confused`, `looking at this`. User see their own reactions (highlighted in the main application color) and the reactions of other users (counted by reaction).

> ![discussion reaction](https://github.com/preignition/public/assets/1168053/5a384101-ed9c-4af9-833c-0b7058cd717b)
> Screenshot of the emojis, with the `hooray` emoji selected

Owners of content items can also edit or delete their content. Anyone can mark a content as not appropriate. The content is then hidden and the channel owner is notified (not yet implemented). The channel owner can then decide to delete the content or to unhide it (not yet implemented).

> ![discussion card menu](https://github.com/preignition/public/assets/1168053/4e533851-6e8a-4306-a950-bfdfe6d8a143)
>
> Screenshot of the menu when clicking on the 3 dots on the right of a content item

Users can subscribe to discussions. When a user subscribes to a discussion, they receive an email notification when a content is added to the discussion. The owner of the discussion is automatically subscribed to the discussion, as well as any contributor to the discussion (post a comment, or a reply).

> ![discussion email](https://github.com/preignition/public/assets/1168053/e6c7fb70-a08b-4e57-bd25-8c40503dd7fe)
> Screenshot of an email received when a user is subscribed to a discussion

Any user can subscribe to a discussion to receive notifications when a new comment is added (not yet implemented).

The owner (and editors) of a channel automatically receives an email notification when any content is created in the channel. A channel owner can mute this notification feature (not yet implemented).

It is possible for channel owners and editors to pin certain discussions to the top of the list. Pinned discussions are displayed at the top of the list, and are highlighted.

The discussion app strives to follow accessibility best practice and standards. At the time of early release accessibility testing is done in-house. We hope to be able to conduct user testing with people with disabilities in the near future.

## Channels

Channels are created by teams or automatically when teams activate applications requiring channels (for instance, the blog application). It is also going to be possible to create a channel from the survey app (for channels specific to a survey) - not yet implemented.

> ![discussion channel](https://github.com/preignition/public/assets/1168053/c069e208-ac00-4b59-bd4b-71d263e713ee)
>
> Screenshots of the create channel view from the customer app

Channel owners can add or remove categories. They can also add or remove editors. 

Channels have 3 levels of access (not yet fully implemented):
- `Public` channels are visible to everyone. Users belonging to a `team` can create discussion. Anyone signed-in can join and participate in the discussions. Anyone can react and vote on content.
- `Private` channels are visible to everyone, but only members can join and participate in the discussions. Members are invited by the channel owner or editors. For `survey` channels, respondents would be  automatically added as members (not yet implemented).  Anyone can react and vote on content.
- `Secret` channels are not visible to everyone. Only members can join and participate in the discussions. Members are invited by the channel owner or editors. 
Only members can react and vote on content.


---
Images for this release note are stored in [release-note-images](https://github.com/preignition/public/issues/4)