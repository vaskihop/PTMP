package lt.vtmc.projectTaskManagement.service;

import java.util.List;


import lt.vtmc.projectTaskManagement.model.Project;
import lt.vtmc.projectTaskManagement.model.ProjectEntity;

public interface ProjectService {
	List<ProjectEntity> getProjects();
	
	void addProject(Project project);
	
	void deleteProject(Long projectId);
	
	public ProjectEntity findProjecttById(Long projectId);
	
	void updateArtist(Long projectId, Project project);

}
