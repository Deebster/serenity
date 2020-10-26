(function() {var implementors = {};
implementors["serenity"] = [{"text":"impl Send for CacheAndHttp","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for OpCode","synthetic":true,"types":[]},{"text":"impl Send for VoiceOpCode","synthetic":true,"types":[]},{"text":"impl Send for ApplicationInfo","synthetic":true,"types":[]},{"text":"impl Send for BotApplication","synthetic":true,"types":[]},{"text":"impl Send for CurrentApplicationInfo","synthetic":true,"types":[]},{"text":"impl Send for Team","synthetic":true,"types":[]},{"text":"impl Send for TeamMember","synthetic":true,"types":[]},{"text":"impl Send for MembershipState","synthetic":true,"types":[]},{"text":"impl Send for Attachment","synthetic":true,"types":[]},{"text":"impl&lt;H&gt; Send for MessagesIter&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Embed","synthetic":true,"types":[]},{"text":"impl Send for EmbedAuthor","synthetic":true,"types":[]},{"text":"impl Send for EmbedField","synthetic":true,"types":[]},{"text":"impl Send for EmbedFooter","synthetic":true,"types":[]},{"text":"impl Send for EmbedImage","synthetic":true,"types":[]},{"text":"impl Send for EmbedProvider","synthetic":true,"types":[]},{"text":"impl Send for EmbedThumbnail","synthetic":true,"types":[]},{"text":"impl Send for EmbedVideo","synthetic":true,"types":[]},{"text":"impl Send for GuildChannel","synthetic":true,"types":[]},{"text":"impl Send for Message","synthetic":true,"types":[]},{"text":"impl Send for MessageReaction","synthetic":true,"types":[]},{"text":"impl Send for MessageApplication","synthetic":true,"types":[]},{"text":"impl Send for MessageActivity","synthetic":true,"types":[]},{"text":"impl Send for MessageReference","synthetic":true,"types":[]},{"text":"impl Send for ChannelMention","synthetic":true,"types":[]},{"text":"impl Send for MessageFlags","synthetic":true,"types":[]},{"text":"impl Send for PrivateChannel","synthetic":true,"types":[]},{"text":"impl Send for Reaction","synthetic":true,"types":[]},{"text":"impl Send for ReactionConversionError","synthetic":true,"types":[]},{"text":"impl Send for ChannelCategory","synthetic":true,"types":[]},{"text":"impl Send for PermissionOverwrite","synthetic":true,"types":[]},{"text":"impl Send for MessageType","synthetic":true,"types":[]},{"text":"impl Send for MessageActivityKind","synthetic":true,"types":[]},{"text":"impl Send for ReactionType","synthetic":true,"types":[]},{"text":"impl Send for NeverFails","synthetic":true,"types":[]},{"text":"impl Send for Channel","synthetic":true,"types":[]},{"text":"impl Send for ChannelType","synthetic":true,"types":[]},{"text":"impl Send for PermissionOverwriteType","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for ChannelCreateEvent","synthetic":true,"types":[]},{"text":"impl Send for ChannelDeleteEvent","synthetic":true,"types":[]},{"text":"impl Send for ChannelPinsUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for ChannelUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildBanAddEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildBanRemoveEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildCreateEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildDeleteEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildEmojisUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildIntegrationsUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildMemberAddEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildMemberRemoveEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildMemberUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildMembersChunkEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildRoleCreateEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildRoleDeleteEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildRoleUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for InviteCreateEvent","synthetic":true,"types":[]},{"text":"impl Send for InviteDeleteEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildUnavailableEvent","synthetic":true,"types":[]},{"text":"impl Send for GuildUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for MessageCreateEvent","synthetic":true,"types":[]},{"text":"impl Send for MessageDeleteBulkEvent","synthetic":true,"types":[]},{"text":"impl Send for MessageDeleteEvent","synthetic":true,"types":[]},{"text":"impl Send for MessageUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for PresenceUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for PresencesReplaceEvent","synthetic":true,"types":[]},{"text":"impl Send for ReactionAddEvent","synthetic":true,"types":[]},{"text":"impl Send for ReactionRemoveEvent","synthetic":true,"types":[]},{"text":"impl Send for ReactionRemoveAllEvent","synthetic":true,"types":[]},{"text":"impl Send for ReadyEvent","synthetic":true,"types":[]},{"text":"impl Send for ResumedEvent","synthetic":true,"types":[]},{"text":"impl Send for TypingStartEvent","synthetic":true,"types":[]},{"text":"impl Send for UnknownEvent","synthetic":true,"types":[]},{"text":"impl Send for UserUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for VoiceServerUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for VoiceStateUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for WebhookUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for VoiceHeartbeat","synthetic":true,"types":[]},{"text":"impl Send for VoiceHeartbeatAck","synthetic":true,"types":[]},{"text":"impl Send for VoiceReady","synthetic":true,"types":[]},{"text":"impl Send for VoiceHello","synthetic":true,"types":[]},{"text":"impl Send for VoiceSessionDescription","synthetic":true,"types":[]},{"text":"impl Send for VoiceSpeaking","synthetic":true,"types":[]},{"text":"impl Send for VoiceResume","synthetic":true,"types":[]},{"text":"impl Send for VoiceClientConnect","synthetic":true,"types":[]},{"text":"impl Send for VoiceClientDisconnect","synthetic":true,"types":[]},{"text":"impl Send for GatewayEvent","synthetic":true,"types":[]},{"text":"impl Send for Event","synthetic":true,"types":[]},{"text":"impl Send for EventType","synthetic":true,"types":[]},{"text":"impl Send for VoiceEvent","synthetic":true,"types":[]},{"text":"impl Send for BotGateway","synthetic":true,"types":[]},{"text":"impl Send for Activity","synthetic":true,"types":[]},{"text":"impl Send for ActivityAssets","synthetic":true,"types":[]},{"text":"impl Send for ActivityFlags","synthetic":true,"types":[]},{"text":"impl Send for ActivityParty","synthetic":true,"types":[]},{"text":"impl Send for ActivitySecrets","synthetic":true,"types":[]},{"text":"impl Send for ActivityEmoji","synthetic":true,"types":[]},{"text":"impl Send for Gateway","synthetic":true,"types":[]},{"text":"impl Send for ClientStatus","synthetic":true,"types":[]},{"text":"impl Send for Presence","synthetic":true,"types":[]},{"text":"impl Send for Ready","synthetic":true,"types":[]},{"text":"impl Send for SessionStartLimit","synthetic":true,"types":[]},{"text":"impl Send for ActivityTimestamps","synthetic":true,"types":[]},{"text":"impl Send for ActivityType","synthetic":true,"types":[]},{"text":"impl Send for Emoji","synthetic":true,"types":[]},{"text":"impl&lt;H&gt; Send for MembersIter&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Integration","synthetic":true,"types":[]},{"text":"impl Send for IntegrationAccount","synthetic":true,"types":[]},{"text":"impl Send for Member","synthetic":true,"types":[]},{"text":"impl Send for PartialMember","synthetic":true,"types":[]},{"text":"impl Send for PartialGuild","synthetic":true,"types":[]},{"text":"impl Send for Role","synthetic":true,"types":[]},{"text":"impl Send for Change","synthetic":true,"types":[]},{"text":"impl Send for AuditLogs","synthetic":true,"types":[]},{"text":"impl Send for AuditLogEntry","synthetic":true,"types":[]},{"text":"impl Send for Options","synthetic":true,"types":[]},{"text":"impl Send for Ban","synthetic":true,"types":[]},{"text":"impl Send for Guild","synthetic":true,"types":[]},{"text":"impl Send for GuildEmbed","synthetic":true,"types":[]},{"text":"impl Send for GuildPrune","synthetic":true,"types":[]},{"text":"impl Send for GuildInfo","synthetic":true,"types":[]},{"text":"impl Send for GuildUnavailable","synthetic":true,"types":[]},{"text":"impl Send for Target","synthetic":true,"types":[]},{"text":"impl Send for Action","synthetic":true,"types":[]},{"text":"impl Send for ActionChannel","synthetic":true,"types":[]},{"text":"impl Send for ActionChannelOverwrite","synthetic":true,"types":[]},{"text":"impl Send for ActionMember","synthetic":true,"types":[]},{"text":"impl Send for ActionRole","synthetic":true,"types":[]},{"text":"impl Send for ActionInvite","synthetic":true,"types":[]},{"text":"impl Send for ActionWebhook","synthetic":true,"types":[]},{"text":"impl Send for ActionEmoji","synthetic":true,"types":[]},{"text":"impl Send for ActionMessage","synthetic":true,"types":[]},{"text":"impl Send for ActionIntegration","synthetic":true,"types":[]},{"text":"impl Send for PremiumTier","synthetic":true,"types":[]},{"text":"impl Send for GuildContainer","synthetic":true,"types":[]},{"text":"impl Send for GuildStatus","synthetic":true,"types":[]},{"text":"impl Send for DefaultMessageNotificationLevel","synthetic":true,"types":[]},{"text":"impl Send for ExplicitContentFilter","synthetic":true,"types":[]},{"text":"impl Send for MfaLevel","synthetic":true,"types":[]},{"text":"impl Send for Region","synthetic":true,"types":[]},{"text":"impl Send for VerificationLevel","synthetic":true,"types":[]},{"text":"impl Send for ApplicationId","synthetic":true,"types":[]},{"text":"impl Send for ChannelId","synthetic":true,"types":[]},{"text":"impl Send for EmojiId","synthetic":true,"types":[]},{"text":"impl Send for GuildId","synthetic":true,"types":[]},{"text":"impl Send for IntegrationId","synthetic":true,"types":[]},{"text":"impl Send for MessageId","synthetic":true,"types":[]},{"text":"impl Send for RoleId","synthetic":true,"types":[]},{"text":"impl Send for UserId","synthetic":true,"types":[]},{"text":"impl Send for WebhookId","synthetic":true,"types":[]},{"text":"impl Send for AuditLogEntryId","synthetic":true,"types":[]},{"text":"impl Send for AttachmentId","synthetic":true,"types":[]},{"text":"impl Send for Invite","synthetic":true,"types":[]},{"text":"impl Send for InviteUser","synthetic":true,"types":[]},{"text":"impl Send for InviteChannel","synthetic":true,"types":[]},{"text":"impl Send for InviteGuild","synthetic":true,"types":[]},{"text":"impl Send for RichInvite","synthetic":true,"types":[]},{"text":"impl Send for EmojiIdentifier","synthetic":true,"types":[]},{"text":"impl Send for AffectedComponent","synthetic":true,"types":[]},{"text":"impl Send for Incident","synthetic":true,"types":[]},{"text":"impl Send for IncidentUpdate","synthetic":true,"types":[]},{"text":"impl Send for Maintenance","synthetic":true,"types":[]},{"text":"impl Send for UserParseError","synthetic":true,"types":[]},{"text":"impl Send for UserIdParseError","synthetic":true,"types":[]},{"text":"impl Send for RoleIdParseError","synthetic":true,"types":[]},{"text":"impl Send for ChannelIdParseError","synthetic":true,"types":[]},{"text":"impl Send for ChannelParseError","synthetic":true,"types":[]},{"text":"impl Send for RoleParseError","synthetic":true,"types":[]},{"text":"impl Send for IncidentStatus","synthetic":true,"types":[]},{"text":"impl Send for Permissions","synthetic":true,"types":[]},{"text":"impl Send for CurrentUser","synthetic":true,"types":[]},{"text":"impl Send for User","synthetic":true,"types":[]},{"text":"impl Send for DefaultAvatar","synthetic":true,"types":[]},{"text":"impl Send for OnlineStatus","synthetic":true,"types":[]},{"text":"impl Send for VoiceRegion","synthetic":true,"types":[]},{"text":"impl Send for VoiceState","synthetic":true,"types":[]},{"text":"impl Send for Webhook","synthetic":true,"types":[]},{"text":"impl Send for Context","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for VoiceError","synthetic":true,"types":[]},{"text":"impl Send for CreateEmbed","synthetic":true,"types":[]},{"text":"impl Send for CreateEmbedAuthor","synthetic":true,"types":[]},{"text":"impl Send for CreateEmbedFooter","synthetic":true,"types":[]},{"text":"impl Send for Timestamp","synthetic":true,"types":[]},{"text":"impl Send for CreateChannel","synthetic":true,"types":[]},{"text":"impl Send for CreateInvite","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for CreateAllowedMentions","synthetic":true,"types":[]},{"text":"impl Send for EditChannel","synthetic":true,"types":[]},{"text":"impl Send for EditGuild","synthetic":true,"types":[]},{"text":"impl Send for EditMember","synthetic":true,"types":[]},{"text":"impl Send for EditMessage","synthetic":true,"types":[]},{"text":"impl Send for EditProfile","synthetic":true,"types":[]},{"text":"impl Send for EditRole","synthetic":true,"types":[]},{"text":"impl Send for ExecuteWebhook","synthetic":true,"types":[]},{"text":"impl Send for GetMessages","synthetic":true,"types":[]},{"text":"impl Send for ParseValue","synthetic":true,"types":[]},{"text":"impl Send for Settings","synthetic":true,"types":[]},{"text":"impl Send for Cache","synthetic":true,"types":[]},{"text":"impl Send for Extras","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ClientBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Client","synthetic":true,"types":[]},{"text":"impl Send for ShardManager","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ShardManagerOptions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ShardManagerMonitor","synthetic":true,"types":[]},{"text":"impl Send for ShardMessenger","synthetic":true,"types":[]},{"text":"impl Send for ShardQueuer","synthetic":true,"types":[]},{"text":"impl Send for ShardRunner","synthetic":true,"types":[]},{"text":"impl Send for ShardRunnerOptions","synthetic":true,"types":[]},{"text":"impl Send for GatewayIntents","synthetic":true,"types":[]},{"text":"impl Send for ShardId","synthetic":true,"types":[]},{"text":"impl Send for ShardRunnerInfo","synthetic":true,"types":[]},{"text":"impl Send for ShardManagerError","synthetic":true,"types":[]},{"text":"impl Send for ShardRunnerMessage","synthetic":true,"types":[]},{"text":"impl Send for ShardClientMessage","synthetic":true,"types":[]},{"text":"impl Send for ShardManagerMessage","synthetic":true,"types":[]},{"text":"impl Send for ShardQueuerMessage","synthetic":true,"types":[]},{"text":"impl Send for ShardStageUpdateEvent","synthetic":true,"types":[]},{"text":"impl Send for ClientVoiceManager","synthetic":true,"types":[]},{"text":"impl Send for Args","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for Iter&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RawArguments&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Configuration","synthetic":true,"types":[]},{"text":"impl Send for WithWhiteSpace","synthetic":true,"types":[]},{"text":"impl Send for Check","synthetic":true,"types":[]},{"text":"impl Send for CommandOptions","synthetic":true,"types":[]},{"text":"impl Send for Command","synthetic":true,"types":[]},{"text":"impl Send for HelpCommand","synthetic":true,"types":[]},{"text":"impl Send for HelpOptions","synthetic":true,"types":[]},{"text":"impl Send for GroupOptions","synthetic":true,"types":[]},{"text":"impl Send for CommandGroup","synthetic":true,"types":[]},{"text":"impl Send for BucketBuilder","synthetic":true,"types":[]},{"text":"impl Send for StandardFramework","synthetic":true,"types":[]},{"text":"impl Send for Delimiter","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for Error&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Reason","synthetic":true,"types":[]},{"text":"impl Send for CheckResult","synthetic":true,"types":[]},{"text":"impl Send for OnlyIn","synthetic":true,"types":[]},{"text":"impl Send for HelpBehaviour","synthetic":true,"types":[]},{"text":"impl Send for DispatchError","synthetic":true,"types":[]},{"text":"impl Send for GroupCommandsPair","synthetic":true,"types":[]},{"text":"impl Send for SuggestedCommandName","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Command&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Suggestions","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CustomisedHelpData&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Shard","synthetic":true,"types":[]},{"text":"impl Send for ConnectionStage","synthetic":true,"types":[]},{"text":"impl Send for InterMessage","synthetic":true,"types":[]},{"text":"impl Send for ShardAction","synthetic":true,"types":[]},{"text":"impl Send for ReconnectType","synthetic":true,"types":[]},{"text":"impl Send for LightMethod","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for AttachmentType&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for GuildPagination","synthetic":true,"types":[]},{"text":"impl Send for Http","synthetic":true,"types":[]},{"text":"impl Send for DiscordJsonError","synthetic":true,"types":[]},{"text":"impl Send for ErrorResponse","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Ratelimiter","synthetic":true,"types":[]},{"text":"impl Send for Ratelimit","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RatelimitedRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RequestBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Request&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Route","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RouteInfo&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Typing","synthetic":true,"types":[]},{"text":"impl Send for Colour","synthetic":true,"types":[]},{"text":"impl Send for Content","synthetic":true,"types":[]},{"text":"impl Send for MessageBuilder","synthetic":true,"types":[]},{"text":"impl Send for CustomMessage","synthetic":true,"types":[]},{"text":"impl Send for ContentSafeOptions","synthetic":true,"types":[]},{"text":"impl Send for ContentModifier","synthetic":true,"types":[]},{"text":"impl Send for Audio","synthetic":true,"types":[]},{"text":"impl Send for DcaMetadata","synthetic":true,"types":[]},{"text":"impl Send for Handler","synthetic":true,"types":[]},{"text":"impl Send for Manager","synthetic":true,"types":[]},{"text":"impl Send for AudioType","synthetic":true,"types":[]},{"text":"impl Send for DcaError","synthetic":true,"types":[]},{"text":"impl Send for MessageFilter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for MessageCollectorBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CollectReply&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for MessageCollector","synthetic":true,"types":[]},{"text":"impl Send for ReactionFilter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReactionCollectorBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CollectReaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ReactionCollector","synthetic":true,"types":[]},{"text":"impl Send for ReactionAction","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()