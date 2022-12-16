const { EmbedBuilder } = require("discord.js");
const delay = require("delay");

module.exports = {
	name: "channelmix",
	description: "Set the current player filter to ChannelMix.",
	category: "Filters",
	permissions: {
		bot: [],
		user: [],
	},
	settings: {
		inVc: true,
		sameVc: true,
		player: true,
		current: true,
		owner: false,
	},
	run: async (client, interaction) => {
		await interaction.deferReply({ ephemeral: true });

		const player = client.poru.players.get(interaction.guild.id);

		await player.filters.setChannelMix(true);

		const embed = new EmbedBuilder().setDescription(`\`🔩\` | Filter has been set to: \`ChannelMix\``).setColor(client.color);

		await delay(2000);
		return interaction.editReply({ embeds: [embed] });
	},
};