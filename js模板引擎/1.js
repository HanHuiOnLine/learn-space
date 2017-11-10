{{#each student }}
		{{#if name}}
			{{#compare age 20}}
				<tr>
					<td>{{ name }}</td>
					<td>{{ sex }}</td>
					<td>{{ age }}</td>
				</tr>
				{{else}}
				<tr>
					<td>?</td>
					<td>?</td>
					<td>?</td>
				</tr>
			{{/compare}}
		{{/if}}
	{{/each}}
	<div>1212</div>