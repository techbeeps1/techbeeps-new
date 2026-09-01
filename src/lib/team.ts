import { TeamMember } from "@/types/team";
import { teamMembers } from "@/data/team";

export function getAllTeamMembers(): TeamMember[] {
  return teamMembers;
}

export function getTeamMemberBySlug(slug: string): TeamMember | null {
  return teamMembers.find((member) => member.slug === slug) || null;
}

export function getTeamMemberById(id: string): TeamMember | null {
  return teamMembers.find((member) => member.id === id) || null;
}

export function getAllTeamMemberSlugs(): string[] {
  return teamMembers.map((member) => member.slug);
}
