//i want you to generate a type alias for a Vulnerability (with properties like id, severity, url).
type Vulnerability = {
	id: string;
	severity: 'low' | 'medium' | 'high';
	url: string;
};

function formatVulnerability(vuln: Vulnerability): string {
	const { url } = vuln;
	return `The Vulnerabilty ${vuln.id} has a ${vuln.severity} severity, find it here ${url}`;
}

const authError: Vulnerability = {
	id: '1',
	severity: 'low',
	url: 'login.com',
};

console.log(formatVulnerability(authError));
