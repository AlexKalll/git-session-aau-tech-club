a = 10

METADATA = {
	"name": "git-session-aau-tech-club",
	"version": "0.1"
}

def get_metadata():
	return METADATA

if __name__ == "__main__":
	print(f"{METADATA['name']} v{METADATA['version']}")