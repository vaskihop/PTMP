package lt.vtmc.projectTaskManagement.service;

import java.util.List;


import lt.vtmc.projectTaskManagement.model.Project;
import lt.vtmc.projectTaskManagement.model.ProjectEntity;

public interface ProjectService {
	List<Project> getProjects();
	
	void addProject(Project project);
	
	void deleteProject(Long projectId);
	
	Project findProjecttById(Long projectId);
	
	void updateProject(Long projectId, Project project);
	
	List<Project> findProjectsByTitle(String title);

}
